import express from 'express'
import session from 'express-session'
import { WorkOS } from '@workos-inc/node'

const app = express()
const router = express.Router()

app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true },
    })
)

const workos = new WorkOS(process.env.WORKOS_API_KEY)
const clientID = process.env.WORKOS_CLIENT_ID
const organizationID = 'org_test_idp'
const redirectURI = 'http://localhost:8000/callback'
const state = ''
// Hardcoded org ID for API call, just set here to make it cleaner when calling later in API call.
const orgID = 'org_01K39X8ZKQV57D1XBSH9335FQ7';

router.get('/', function (req, res) {
    if (session.isloggedin) {
        res.render('login_successful.ejs', {
            profile: session.profile,
            first_name: session.first_name,
            // Setter for last name
            last_name: session.last_name,
            // Setter for organization name
            organization_name: session.organization_name,
            // Setter for organization ID
            organization_id: session.organization_id,
        })
    } else {
        res.render('index.ejs', { title: 'Home' })
    }
})

router.post('/login', (req, res) => {
    const login_type = req.body.login_method

    const params = {
        clientID: clientID,
        redirectURI: redirectURI,
        state: state,
    }

    if (login_type === 'saml') {
        params.organization = organizationID
    } else {
        params.provider = login_type
    }

    try {
        const url = workos.sso.getAuthorizationURL(params)

        res.redirect(url)
    } catch (error) {
        res.render('error.ejs', { error: error })
    }
})

router.get('/callback', async (req, res) => {
    let errorMessage
    try {
        const { code, error } = req.query

        if (error) {
            errorMessage = `Redirect callback error: ${error}`
        } else {
            const profile = await workos.sso.getProfileAndToken({
                code,
                clientID,
            })
            const json_profile = JSON.stringify(profile, null, 4)

            // API Call for organization information, using hardcoded orgID above. This call helps me get bonus points since it allows me to display the organization name.
            const organization = await workos.organizations.getOrganization(orgID);

            session.first_name = profile.profile.first_name
            // Setter for last name
            session.last_name = profile.profile.last_name
            session.profile = json_profile
            session.isloggedin = true
            // Setter for organization ID
            session.organization_id = organization.id
            // Setter for organization name
            session.organization_name = organization.name
        }
    } catch (error) {
        errorMessage = `Error exchanging code for profile: ${error}`
    }

    if (errorMessage) {
        res.render('error.ejs', { error: errorMessage })
    } else {
        res.redirect('/')
    }
})

router.get('/logout', async (req, res) => {
    try {
        session.first_name = null
        session.profile = null
        session.isloggedin = null

        res.redirect('/')
    } catch (error) {
        res.render('error.ejs', { error: error })
    }
})

export default router
