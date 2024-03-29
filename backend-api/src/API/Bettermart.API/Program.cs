using Bettermart.Persistance; 
using Bettermart.Persistance.Settings;
using Bettermart_Application;
using Bettermart_Identity;
using Bettermart_Application.Contracts;
using Microsoft.Extensions.Options;
using Bettermart.API.Swagger;
using Bettermart.Payments;
using Bettermart_Identity.Services;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetSection("DatabaseSettings");

// Add services to the container.
builder.Services.Configure<DatabaseSettings>(builder.Configuration.GetSection("DatabaseSettings"));
builder.Services.AddSingleton<IDatabaseSettings>(serviceProvider =>
    serviceProvider.GetRequiredService<IOptions<DatabaseSettings>>().Value);
builder.Services.ConfigurePersistanceServices();
builder.Services.ConfigureApplicationServices();
builder.Services.ConfigureIdentityServices(builder.Configuration);
builder.Services.ConfigurePaymentServices();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.ConfigureSwagger();
builder.Services.AddHttpContextAccessor();

builder.Services.AddCors(options => options.AddPolicy("AllowAll", p => p.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()));


var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
//    app.UseSwagger();
//    app.UseSwaggerUI();
//}

app.UseCors("AllowAll");

app.UseAuthentication();
app.UseAuthorization();

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Lifetime.ApplicationStarted.Register(async () => {
    var adminUserService = new AdminUserService();
    await adminUserService.createDefaultAdminUserAsync();
});

app.Run();