import Navigation from "./Navigation";

function Layout(props) {
  return (
    <div>
      <Navigation />
      <div>{props.children}</div>
    </div>
  );
}

export default Layout;
