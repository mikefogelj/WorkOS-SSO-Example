# Node.js Example App with SSO powered by WorkOS and edited by Michael Fogel

An example application demonstrating how to use the [WorkOS Node.js SDK](https://github.com/workos/workos-node) to authenticate users via SSO.

## Prerequisites

Node.js version 10+

## Node.js Project Setup

1. Clone this repo and install dependencies for the app you'd like to use:

    ```bash
    # HTTPS
    git clone https://github.com/mikefogelj/WorkOS-SSO-Example.git
    ```

2. Navigate to the SSO app within the cloned repo.

    ```bash
    cd node-example-applications/node-sso-example
    ```

3. Install the dependencies.
    ```bash
    npm install
    ```

## Configure your environment (.env already created, using my API Key and Client ID)

4. Grab your API Key and Client ID from your WorkOS Dashboard. Create a `.env`
   file at the project root, and store them like so:

    ```bash
    WORKOS_API_KEY=sk_xxxxxxxxxxxxx
    WORKOS_CLIENT_ID=project_xxxxxxxxxxxx
    ```

## Testing the Integration

5. Start the server by running the following command: 

```sh
npm start
```

6. Once that is done, head over to http://localhost:8000/ in any browser to begin the login flow. You should see the following options:
- Google OAuth
- Microsoft OAuth
- Enterprise SAML

7. To test Google, Click button and login with your Google account.
8. To test Microsoft, Click button and login with your Microsoft account.
9. To test IdP login, click this button 
or 
navigate to [Test SSO - Identity provider-initiated SSO](https://dashboard.workos.com/environment_01K39X8ZAPJRKSV4A2B0PGWAP2/test-sso/idp-initiated) and click the "Continue" button.
10. On the "Return an SSO Profile tab, enter an email followed by "@example.com", along with a first and last name.
11. Click "Continue" button.
12. Congrats! You should now be redirected to the succes page and see the name, followed by organization ID/name, and the JSON of the profile. 

