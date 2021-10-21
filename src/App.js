import "./styles.css";
import styled from "styled-components";

const Container = styled.div`
  width: 75%;
  margin: 50px auto;
  border: 1px solid grey;
  display: grid;
  color: white;
  grid-template-rows: 60px 100px 200px 60px;
  grid-template-columns: 1fr 1fr 1fr 0.72fr;
  grid-gap: 20px;

  .div1 {
    background-color: #ff4757;
    grid-column: 1/-1;
  }
  .div2 {
    background-color: #2ed573;
  }
  .div3 {
    background-color: #1e90ff;
  }
  .div4 {
    background-color: #5352ed;
  }
  .div5 {
    background-color: #2f3542;
    grid-row: 2/4;
    grid-column: 4;
  }
  .div6 {
    background-color: #ffa502;
    grid-column: 1/4;
  }
  .div7 {
    background-color: #00d2d3;
    grid-column: 1/-1;
  }
`;

export default function App() {
  return (
    <Container>
      <div class="div1">Header</div>
      <div class="div2">Box1</div>
      <div class="div3">Box2</div>
      <div class="div4">Box3</div>
      <div class="div5">sidebar</div>
      <div class="div6">Main Content</div>
      <div class="div7">Footer</div>
    </Container>
  );
}
