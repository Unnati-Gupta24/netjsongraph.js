'use strict';

import "../src/js/netjsongraph.core.js";

describe('NetJSONGraph Specification', () => {
  const NetJSONGraphTitle = {
    text: "NetJSONGraph",
    link: "",
    textStyle: {
      color: "grey",
      fontWeight: "bold",
      fontSize: 30
    },
    left: "center",
    top: "5%"
  };
  const NetJSONGraphConfig = {
    layout: "force",
    cursor: "pointer",
    label: {
      show: true,
      color: "#000000"
    },
    roam: true,
    draggable: true,
    focusNodeAdjacency: true,
    hoverAnimation: true,
    legendHoverLink: true
  };

  test("APIs exist", () => {
    expect(NetJSONGraph).toBeDefined();

    expect(NetJSONGraph.prototype.setConfig).toBeInstanceOf(Function);
    expect(NetJSONGraph.prototype.setUtils).toBeInstanceOf(Function);
  })

  test('NetJSONGraph object attribute fields exist', () => {
    let JSONParam = "test";
    const graph = new NetJSONGraph(JSONParam);

    expect(graph).toBeInstanceOf(NetJSONGraph);

    expect(graph.el).toBeInstanceOf(HTMLElement);
    expect(graph.JSONParam).toBe(JSONParam);
    expect(graph.config).toBeInstanceOf(Object);
    expect(graph.utils).toBeInstanceOf(Object);
    expect(graph.setConfig).toBeInstanceOf(Function);
    expect(graph.setUtils).toBeInstanceOf(Function);
    expect(graph.render).toBeInstanceOf(Function);
 
    expect(graph.config).toHaveProperty("metadata", true);
    expect(graph.config).toHaveProperty("svgRender", false);
    expect(graph.config.title).toEqual(NetJSONGraphTitle);
    expect(graph.config.graphConfig).toEqual(NetJSONGraphConfig);
    expect(graph.config.scaleExtent).toBeInstanceOf(Array);
    expect(graph.config).toHaveProperty("gravity", 0.1);
    expect(graph.config.edgeLength).toBeInstanceOf(Array);
    expect(graph.config).toHaveProperty("repulsion", 120);
    expect(graph.config.nodeSize).toBeDefined();
    expect(graph.config).toHaveProperty("labelDx", 0);
    expect(graph.config).toHaveProperty("labelDy", -10);
    expect(graph.config.nodeStyleProperty).toBeDefined();
    expect(graph.config.linkStyleProperty).toBeDefined();
    expect(graph.config.onInit).toBeInstanceOf(Function);
    expect(graph.config.onLoad).toBeInstanceOf(Function);
    expect(graph.config.prepareData).toBeInstanceOf(Function);
    expect(graph.config.onClickNode).toBeInstanceOf(Function);
    expect(graph.config.onClickLink).toBeInstanceOf(Function);

    expect(graph.utils.NetJSONMetadata).toBeInstanceOf(Function);
    expect(graph.utils.nodeInfo).toBeInstanceOf(Function);
    expect(graph.utils.linkInfo).toBeInstanceOf(Function);
    expect(graph.utils.numberMinDigit).toBeInstanceOf(Function);
    expect(graph.utils.dateParse).toBeInstanceOf(Function);
    expect(graph.utils.JSONParamParse).toBeInstanceOf(Function);
  });
})
