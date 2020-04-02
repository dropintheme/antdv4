import React, { useEffect, useState } from 'react';
import Drawer from '../drawer';
import {useWindowDimensions} from '@dropintheme/utils';
import './style.scss';


const GenericPanel = (props) => {
    const [drawerVisible, setDrawerVisible] = useState(true);
    const { height, width } = useWindowDimensions();
    let panels = {
      left: [],
      middle: [],
      right: []
    };
    React.Children.forEach(props.children, (child, i) => {
      const { panel } = child.props;
      switch (panel) {
        case 'left':
          panels.left.push(child);
          break;
        case 'middle':
          panels.middle.push(child);
          break;
        case 'right':
          panels.right.push(child);
          break;
        default:
          panels.middle.push(child);
      }

    });
    if (width < 998) {
      return <React.Fragment><Drawer
        // title="Basic Drawer"
        placement="left"
        width = {width}
        closable={true}
        onClose={() => { setDrawerVisible(false) }}
        visible={drawerVisible}>
        {panels.left}
      </Drawer>
        {/* <Drawer
        title="Basic Drawer"
        placement="right"
        closable={true}
        onClose={() => { setDrawerVisible(false) }}
        visible={drawerVisible}>
        {panels.right}
      </Drawer> */}
        <div className="middle-panel mobile-view show">{panels.middle}</div>
      </React.Fragment>
    }

    return <div className="content-panel">
      <div className="left-panel">{panels.left}</div>
      <div className="middle-panel">{panels.middle}</div>
      <div className="right-panel">{panels.right}</div>
    </div>
  }

  export default GenericPanel;