//Interface for a movie object
//params: id, imageUrl, name, rating and year of release
export interface Movie {
    id: number; 
    name: string;
    imageUrl: string;
    rating: number;
    year: number;
}