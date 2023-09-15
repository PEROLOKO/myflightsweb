import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import Button from "@/components/Button";
import { PlusIcon } from "@heroicons/react/24/outline";

async function getVoos(){
  const url = "http://localhost:8080/myflights/api/voo?size=100";
  const resp = await fetch(url, { next: { revalidate: 0 } });
  return resp.json();
}

export default async function Viagens() {

  const data = await getVoos();

  return (
    <>
      <NavBar active={"viagens"} />

      <main className="bg-emerald-900 m-12 p-4 rounded">
        <div className="flex justify-between items-center">
          <h2>Viagens</h2>
          <Button
            icon={<PlusIcon className="h6 w-6" />}
            href="/viagens/form"
          >
            criar conta
          </Button>
        </div>
        <div id="data">
          {data._embedded.entityModelList.map(voo => <DataRow voo={voo} />)}
        </div>
      </main>
    </>
  )
}
