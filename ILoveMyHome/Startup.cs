using ILoveMyHome.Model;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace ILoveMyHome
{
    public class Startup
    {
        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddTransient<S3Repository>();
            services.AddMvc();
            services.AddSpaStaticFiles(cfg => { cfg.RootPath = "ClientApp/dist"; });
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseDeveloperExceptionPage();

            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseMvc();
            
            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";
                
                if(env.IsDevelopment())
                    spa.UseAngularCliServer("start");
            });
        }
    }
}