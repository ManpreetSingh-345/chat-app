const Dashboard = () => {
  return (
    <div className="min-h-screen grid">
      <div className="text-white grid sm:grid-cols-20 grird-rows-3 sm:grid-rows-1 row-span-full">
        <aside className=" px-5 py-8 flex flex-col place-content-between col-span-2 bg-blue-500">
          <ul className="flex flex-col gap-5">
            <li>Chats</li>
            <li>Activity</li>
            <li>People</li>
            <li>Files</li>
          </ul>
          <ul className="flex flex-col gap-5">
            <li>Profile</li>
            <li>Settings</li>
          </ul>
        </aside>
        <main className="col-span-14">Main</main>
        <section className="col-span-4">Section</section>
      </div>
    </div>
  );
};

export default Dashboard;
