import { Link, useLocation } from "react-router-dom";

const MenuTabs = () => {
  const tabs = [
    { name: "All", path: "/all" },
    { name: "Queue", path: "/queue" },
    { name: "Cooking", path: "/cooking" },
    { name: "Completed", path: "/completed" },
    { name: "Canceled", path: "/canceled" },
  ];

  const location = useLocation();

  return (
    <div className="flex flex-1 mx-52 py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="pb-3">
          <div className="flex border-b border-[#d9dbde] gap-8">
            {tabs.map((tab) => {
              const isActive = location.pathname === tab.path;
              return (
                <Link
                  key={tab.name}
                  to={tab.path}
                  className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                    isActive
                      ? "border-b-[#788a9f] text-[#131416]"
                      : "border-b-transparent text-[#6b727b]"
                  }`}
                >
                  <p
                    className={`text-sm font-bold leading-normal tracking-[0.015em] ${
                      isActive ? "text-[#131416]" : "text-[#6b727b]"
                    }`}
                  >
                    {tab.name}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuTabs;
