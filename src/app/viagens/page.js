import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";

async function getVoos(){
  const url = "http://localhost:8080/myflights/api/voo";
  const resp = await fetch(url, { next: { revalidate: 0 } });
  return resp.json();
}

export default async function Viagens() {

  const data = await getVoos();

  return (
    <>
      <NavBar active={"viagens"} />

      <main className="bg-emerald-900 m-12 p-4 rounded">
        <h2>Viagens</h2>
        <div id="data">
          {data._embedded.entityModelList.map(voo => <DataRow voo={voo} />)}
        </div>
      </main>
    </>
  )
}
