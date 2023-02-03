using FirebaseAdmin;
using FirebaseAdmin.Auth;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System.Security.Claims;
using System.Text.Encodings.Web; 

namespace Bettermart_Identity.Handlers
{
    public class FirebaseAuthenticationHandler : AuthenticationHandler<AuthenticationSchemeOptions>
    {
        private const string admin = "admin";
        private const string userId = "userId";
        private readonly FirebaseApp _firebaseApp;

        public FirebaseAuthenticationHandler(IOptionsMonitor<AuthenticationSchemeOptions> options, ILoggerFactory logger, UrlEncoder encoder, ISystemClock clock, FirebaseApp firebaseApp) : base(options, logger, encoder, clock)
        {
            _firebaseApp = firebaseApp;
        }

        protected override async Task<AuthenticateResult> HandleAuthenticateAsync()
        { 
            if (!Context.Request.Headers.ContainsKey("Authorization"))
            {
                return AuthenticateResult.NoResult();
            }

            string firebaseJwtToken = Context.Request.Headers["Authorization"];

            if(firebaseJwtToken == null || !firebaseJwtToken.StartsWith("Bearer"))
            {
                return AuthenticateResult.Fail("Authentication Token Not Found");
            }

            string token = firebaseJwtToken.Substring("Bearer ".Length);

            FirebaseToken firebaseToken = await FirebaseAuth.GetAuth(_firebaseApp).VerifyIdTokenAsync(token);

            return AuthenticateResult.Success(
                new AuthenticationTicket(new System.Security.Claims.ClaimsPrincipal(new List<ClaimsIdentity>()
                {
                    new ClaimsIdentity(ToClaims(firebaseToken.Claims), nameof(FirebaseAuthenticationHandler))
                }), JwtBearerDefaults.AuthenticationScheme));
        
        }


        private IEnumerable<Claim> ToClaims (IReadOnlyDictionary<string, object> claims)
        {

            List<Claim> claimsList = new List<Claim>();
            claimsList.Add(new Claim(userId, claims[userId].ToString()));
 
            if (claims.ContainsKey(admin))
            {
                claimsList.Add(new Claim(admin, claims[admin].ToString()));
            }

            return claimsList;

        }
    }
}
