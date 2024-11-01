import Link from "next/link";

const Home = () => {
  return (<>
    <div className="flex items-center justify-center h-[100vh] flex-col gap-3">
      <h1 className="text-[40px]">Next JS Simple Authentication</h1>
      <Link className="p-2 rounded-md bg-blue-300 text-slate-900" href={"/login"}>Login</Link>
    </div>
  </>);
}
 
export default Home;