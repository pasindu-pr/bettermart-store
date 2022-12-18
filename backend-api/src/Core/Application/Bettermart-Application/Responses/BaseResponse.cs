namespace Bettermart_Application.Responses
{
    public class BaseResponse<T>
    {
        public T? Data { get; set; }
        public bool Success { get; set; }
        public String Message { get; set; } = string.Empty;  
        public List<string>? Errors { get; set; }
    }
}
