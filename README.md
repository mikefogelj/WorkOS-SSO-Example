# Welcome to Michael Fogel's WorkOS Written and Technical Interview. 

In this Github repo, you will find two written responses to the mock customer emails as well as an example application demonstrating use of the [WorkOS Node SDK](https://github.com/workos-inc/workos-node) for SSO. Once you follow the steps to login with SSO, you will see a welcome screen with the first and last name used to sign in as well as the organization ID and the [organization name](https://workos.com/docs/reference/organization/get). 

## Written response for Email #1 ([PDF HERE](https://github.com/mikefogelj/WorkOS-SSO-Example/blob/my-sso-work/WorkOS%20Email%201.pdf))

Hi Mark, 

Thanks for reaching out. I would be happy to help! 

WorkOS cannot retrieve the IdP metadata XML in this case because we don't serve as an IdP. With WorkOS, you will provide the IdP metadata to us from your selected IdP, as we work as the SSO Service Provider (SP). We provide the [ACS URL](https://workos.com/docs/glossary/acs-url), [SP Entity ID](https://workos.com/docs/glossary/sp-entity-id), and [SP Metadata URL](https://workos.com/docs/glossary/sp-metadata), which can help you obtain more information when using us as the Service Provider. These are all readily available in your Connection Settings in the WorkOS Dashboard.

Since we do not act as an IdP, you can't point third-party apps like SparkNova at us to make us your IdP while using them as your SP. Our SSO service is compatible with any IdP that supports either the SAML or OIDC protocols. Therefore, I recommend using us as your all-in-one SSO SP, as we integrate well with all common and custom IdPs. For this reason, you won’t find anywhere to retrieve IdP metadata XML from WorkOS in our docs or our dashboard.
- More information on IdP-configured SSO in WorkOS can be found here: https://workos.com/docs/sso/login-flows/idp-initiated-sso/configure-idp-initiated-sso
- More information on SP to IdP in WorkOS can be found here: https://workos.com/docs/sso/saml-security/sp-to-idp-security-features
- More information on IdP to SP can be found here: https://workos.com/docs/sso/saml-security/idp-to-sp-security-features

If you need to use SparkNova to trust an IdP, you can configure an IdP (such as Okta/Entra/Google/…). Once you do this, WorkOS can still power SSO for your app, but we will not be able to act as that IdP for SparkNova as an SSO SP.
More information on this can be found here: https://workos.com/docs/sso/2-configure-a-redirect-uri/identity-provider-initiated-sso

To simplify the process, I recommend looking into our [AuthKit](https://workos.com/docs/authkit) product. AuthKit is a complete authentication platform that leverages Single Sign-On functionality out of the box, following best practices, and all implemented via WorkOS, so you can keep things organized and simple.

Please let me know if you have any other questions! 

Best,
Michael Fogel (Developer Success Engineer)

## Written response for Email #2 ([PDF HERE](https://github.com/mikefogelj/WorkOS-SSO-Example/blob/my-sso-work/WorkOS%20Email%202.pdf))

Hi Julia, 

Thanks for reaching out. I would be happy to help! 

To do this, I recommend using the optional `state` parameter to encode the arbitrary information to help restore application state between redirects. You can either use this to pass the data you want directly or to serve as a flag for setting the data elsewhere. 

More information on this can be found here: 
- https://workos.com/docs/sso/1-add-sso-to-your-app/add-an-endpoint-to-initiate-sso
- https://workos.com/docs/sso/login-flows/sp-initiated-sso

If you eventually plan on implementing [AuthKit](https://workos.com/docs/authkit), I recommend using [metadata](https://workos.com/docs/authkit/metadata), where you can set the data completely custom. Our metadata allows 10 key-value pairs, which you can use in any way you want to track specific data. This feature is currently only available with an AuthKit implementation and is not available with standalone SSO.

Please let me know if you have any other questions, as I’d be more than happy to help! 

Best, 
Michael Fogel (Developer Success Engineer)

## Technical Challenge implementing SSO from Example App

The techincal challenge can be found in this repo as well. Simply navigate to the [`node-sso-example`](https://github.com/mikefogelj/WorkOS-SSO-Example/tree/my-sso-work/node-sso-example) folder for the README and information on my implementation of that challenge. Video demonstrations included in the README. 
