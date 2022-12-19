using Bettermart.Persistance; 
using Bettermart.Persistance.Settings;
using Bettermart_Application;
using Bettermart_Identity;
using Bettermart_Application.Contracts;
using Microsoft.Extensions.Options;
using Bettermart.API.Swagger;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetSection("DatabaseSettings");

// Add services to the container.
builder.Services.Configure<DatabaseSettings>(builder.Configuration.GetSection("DatabaseSettings"));
builder.Services.AddSingleton<IDatabaseSettings>(serviceProvider =>
    serviceProvider.GetRequiredService<IOptions<DatabaseSettings>>().Value);
builder.Services.ConfigurePersistanceServices();
builder.Services.ConfigureApplicationServices();
builder.Services.ConfigureIdentityServices(builder.Configuration);
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.ConfigureSwagger();
builder.Services.AddHttpContextAccessor();

var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
//    app.UseSwagger();
//    app.UseSwaggerUI();
//}

app.UseAuthentication();
app.UseAuthorization();

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
