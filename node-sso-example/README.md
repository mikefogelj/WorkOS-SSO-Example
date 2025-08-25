# Node.js Example App with SSO powered by WorkOS and Michael Fogel

An example application demonstrating how to use the [WorkOS Node.js SDK](https://github.com/workos/workos-node) to authenticate users via SSO.

## Prerequisites

Node.js version 10+

## Node.js Project Setup

1. Clone this repo and install dependencies for the app you'd like to use:

    ```
    # HTTPS
    git clone https://github.com/mikefogelj/WorkOS-SSO-Example.git
    ```

2. Navigate to the SSO app within the cloned repo.

    ```
    cd node-example-applications/node-sso-example
    ```

3. Install the dependencies.
    ```
    npm install
    ```

## Configure your environment

4. Create a `.env` file in the project root folder (node-sso-example).

5. Grab your API Key and Client ID from your WorkOS Dashboard in the "API Keys" section, and enter these in the .env file like so:

    ```bash
    WORKOS_API_KEY=sk_xxxxxxxxxxxxx
    WORKOS_CLIENT_ID=project_xxxxxxxxxxxx
    ```

## Testing the Integration

6. Start the server by running the following command: 

```
npm start
```

7. Once that is done, head over to http://localhost:8000/ in any browser to begin the login flow. You should see the following options:
   
**- Google OAuth**
  
https://github.com/user-attachments/assets/857c5555-7914-45a8-a904-605dfacc284f

**- Microsoft OAuth**

https://github.com/user-attachments/assets/7843cb19-7ac1-4001-936a-5bc15c2a625b

**- Enterprise SAML (IdP)**

https://github.com/user-attachments/assets/78ddf53d-a919-4b33-bf6c-496fc082306e

https://github.com/user-attachments/assets/f5185e89-513e-48d5-bb96-da89d793b4d8

8. To test Google, click the button and log in with your Google account.

9. To test Microsoft, click the button and log in with your Microsoft account.

10. To test IdP login, click the "Enterprise SAML" button **or** navigate to [Test SSO - Identity provider-initiated SSO](https://dashboard.workos.com/environment_01K39X8ZAPJRKSV4A2B0PGWAP2/test-sso/idp-initiated) and click the "Continue" button.

11. On the "Return an SSO Profile tab, enter an email followed by "@example.com", along with a first and last name.

12. Click the "Continue" button.

13. Congrats! You should now be redirected to the success page and see the name, followed by organization ID/name, and the JSON of the profile. 

