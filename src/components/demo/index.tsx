import React, { MouseEvent } from "react";
import styles from "./demo.module.styl";

interface Props {
  name: string;
  age?: number;
  lists?: {
    label: string;
    value: number;
  }[];
}
interface State {
  name: string;
  age?: number;
  lists: {
    label: string;
    value: number;
  }[];
}

export default class Demo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      ...props,
      lists: [],
    };
  }
  /**
   * 点击事件
   * @param event
   */
  handler(event: MouseEvent<HTMLSpanElement>) {
    const list = [...this.state.lists];
    list.push({
      label: `测试${list.length}`,
      value: list.length,
    });
    this.setState((state) => {
      return {
        ...state,
        lists: list,
      };
    });
    console.log(this.state);
  }
  render() {
    return (
      <>
        <span className={styles.name}>{this.props.name}</span>
        <span>{this.state.age}</span>
        <span className={styles.btn} onClick={this.handler.bind(this)}>
          {"点我"}
        </span>
        <ul>
          {this.state.lists.map((item, index) => {
            return (
              <li key={index}>
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
