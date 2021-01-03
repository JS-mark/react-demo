import React from "react";
import styles from "./demo.module.styl";
interface Props {
  name: string;
  age?: number;
}
interface State {
  name: string;
  age?: number;
}

export default class Demo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: props?.name ?? "222",
      age: props.age,
    };
  }
  render() {
    return (
      <>
        <span className={styles.name}>{this.props.name}</span>
        <span>{this.state.age}</span>
      </>
    );
  }
}
