import "./styles.css";
import { reportable } from "./decorators/class-decorators";
import { log } from "./decorators/method-decorators";
import { format, getFormat } from "./decorators/property-decorators";
import { useState, useRef } from "react";

@reportable
class TestA {
  private value: number;

  @format("Hello, %s")
  private greeting: string;

  constructor(msg: string) {
    console.log("---constructor---");
    this.greeting = msg;
  }

  @log
  public test(): void {
    this.value = Math.random();
  }

  public toString(): string {
    return JSON.stringify(this);
  }

  public greet(): string {
    let formatString = getFormat(this, "greeting");
    return formatString.replace("%s", this.greeting);
  }
}

export default function App() {
  const [objString, setObjString] = useState<string>();
  const [msg, setMsg] = useState<string>();
  const testA = useRef<TestA>(null);
  const testClassValidator = () => {
    testA.current = new TestA("Ada");
    setObjString(testA.current.toString());
  };

  const testMsg = () => {
    setMsg(testA.current?.greet());
  };

  return (
    <div className="App">
      <h1>Decorators</h1>
      <section>
        <h2>Class Decorators</h2>
        <p>{objString}</p>
        <button onClick={testClassValidator}>Create a new instance</button>
        <h2>Property Decorators</h2>
        <p>{msg}</p>
        <button onClick={testMsg}>Greet</button>
      </section>
    </div>
  );
}
