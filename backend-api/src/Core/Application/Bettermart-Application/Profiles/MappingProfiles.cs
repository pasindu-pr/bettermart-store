using AutoMapper;
using Bettermart.Domain.Entities;
using Bettermart_Application.DTOs.Products;

namespace Bettermart_Application.Profiles
{
    public class MappingProfiles: Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, GetProductDto>().ReverseMap();
        }
    }
}
