import { configure } from "@storybook/react";
import "../src/index.scss"; // 순서를 지켜야합니다 
import "semantic-ui-css/semantic.min.css";

const req = require.context("../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
