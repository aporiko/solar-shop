import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3].map((item) => (
        <Card key={item}>
          <CardHeader>
            <CardTitle>Solar Panel {item}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>550W Monokristal Panel</p>
            <p className="font-bold mt-2">₺12.500</p>
          </CardContent>
        </Card>
      ))}
    </main>
  );
}
