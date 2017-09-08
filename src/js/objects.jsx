import React from "react";
import * as d3 from "d3";

export default class Objects extends React.Component {
    constructor(props) {
        super(props);

        this.mainDest = ['SOUTH', 'ALARM', 'MAINT', 'NORTH'];
    }

    componentDidMount() {
        this.setObjects();
    }

    componentWillReceiveProps(nextProps) {
        //set objects to new location
        const objectInfo = nextProps.activeObject.split('_');
        const selectedObj = objectInfo[0];
        const newLocation = objectInfo[1];
        d3
            .select(`#${selectedObj}`)
            .transition()
            .duration(1000)
            .attr("x", 200*this.mainDest.indexOf(newLocation))
    }

    setObjects() {
        const initialLocation = 'NORTH';
        //appending object-1
        d3
            .select(this.refs['svg-A'])
            .append("svg")
                .attr('id', 'APM1')
                .attr('x', 0)
                .append('circle')
                    .attr('cy', '100')
                    .attr('cx', '51')
                    .attr('r', '40')
                    .attr('stroke', 'black')
                    .attr('strokeWidth', '1')
                    .attr('fill', 'grey')
        //appending object-2
        d3
            .select(this.refs['svg-B'])
                .append("svg")
                .attr('id', 'APM2')
                .attr('x', 0)
                .append('circle')
                    .attr('cy', '100')
                    .attr('cx', '51')
                    .attr('r', '40')
                    .attr('stroke', 'black')
                    .attr('strokeWidth', '1')
                    .attr('fill', 'grey')
    }

    render() {
        const svgContainer = this.mainDest.map((e, i) => (
            <svg key={i} ref={e} x={200*i} width="200" height="100%">
                <circle cx="51" cy="100" r="50" fill="white" stroke="black" strokeWidth="2" />
                <text x="70" y="200" fill="red">{e}</text>
                {i!=this.mainDest.length-1 ?
                    <line x1="100" y1="50%" x2="100%" y2="50%" stroke="black" strokeWidth="2" />
                    : null
                }
            </svg>
        ));

        return (
            <div className="wrapper">
                <svg ref="svg-A" width="70%" height="200">
                    {svgContainer}
                </svg>
                <span> Object 1 </span>
                <hr />
                <svg ref="svg-B" width="70%" height="200">
                    {svgContainer}
                </svg>
                <span> Object 2 </span>
                <hr />
            </div>
        )
    }
}