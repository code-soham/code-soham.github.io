import {
    Home,
  Description,
  PersonOutline,
  CodeOff,
} from '@mui/icons-material';
import {Link} from 'react-router-dom';
export default function Dpdown(props) {
  const data = [
    {
      name: "Home",
      path: "/",
      icon: <Home />,
    },
    {
      name: "About",
      path: "/about",
      icon: <Description />,
    },
    {
      name: "IYKWIM",
      path: "/code",
      icon: <CodeOff />,
    },
    {
      name: "Resume",
      path: "/resume",
      icon: <PersonOutline />,
    },
  ];
  return (
    <div className="animate__slideInDown dropDown">
      {data.map((item, index) => {
        return (
          <Link key={index} to={item.path} style={{ textDecoration: "none" }}>
            <div
              onClick={() => {
                props.setLpath(props.curPath);
                props.setCurPath(`${item.path}`);
              }}
              // className="icon"
              data-aos="zoom-in-down"
            >
              {item.icon}
              <h3>{item.name}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
