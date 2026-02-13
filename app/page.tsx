import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">
        Solar Sistem Ürünleri
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <Card key={item} className="hover:shadow-lg transition">
            <CardContent className="p-6">
              <div className="h-40 bg-gray-100 mb-4 rounded" />

              <h2 className="font-semibold text-lg">
                550W Solar Panel
              </h2>

              <p className="text-gray-600 mt-2">
                Yüksek verimli monokristal panel
              </p>

              <p className="font-bold mt-4 text-xl">
                ₺12.500
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
