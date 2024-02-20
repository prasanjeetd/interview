export interface SearchResult {
    id: string;
    name: string;
    url: string;
  
  }

export const Service =async (searchTerm: any) => {


    const response = await fetch(
        `https://api.bing.microsoft.com/v7.0/search?q=${searchTerm}`,
        {
          headers: {
            "Ocp-Apim-Subscription-Key": "5d05e5dc57c14f57baff86cf2aca9187"
          }
        }
      );

      const data = await response.json();
      console.log(data);

      const r: SearchResult[] = data.webPages.value;

      return r;

}