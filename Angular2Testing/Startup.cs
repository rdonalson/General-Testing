using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(QuickStart3.Startup))]
namespace QuickStart3
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
