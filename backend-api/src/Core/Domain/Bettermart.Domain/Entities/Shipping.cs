
namespace Bettermart.Payments.Entities
{
    public class Shipping
    {
        public String AddressLine1 { get; set; } = String.Empty;
        public String AddressLine2 { get; set; } = String.Empty;    

        public String ShippingCity { get; set; } = String.Empty;

        public String ZipCode { get; set; } = String.Empty; 

        public String State { get; set; } = String.Empty;

        public String Country { get; set; } = String.Empty;

    }
}
