import classes from "./FeatureBox.module.css";

function FeatureBox(props) {
  return <div className={classes.featurebox}>{props.children}</div>;
}
export default FeatureBox;
