type Product = {
  name: string;
  price: string;
  remarks?: string;
};
export const menuItems: Product[] = [
  { name: "Taiyaki mit Anko (süße rote Bohnenpaste)", price: "4,50€" },
  { name: "Taiyaki mit Vanillepudding", price: "4,50€" },
  {
    name: "Taiyaki mit Schokolade",
    remarks: "Bald verfügbar, kontaktieren Sie uns für Details",
    price: "4,50€",
  },
  {
    name: "Taiyaki mit Nuttela Creme",
    remarks: "Bald verfügbar, kontaktieren Sie uns für Details",
    price: "4,50€",
  },
  {
    name: "Taiyaki mit Schoko und Erdbeere",
    remarks: "Bald verfügbar, kontaktieren Sie uns für Details",
    price: "5,50€",
  },
];
