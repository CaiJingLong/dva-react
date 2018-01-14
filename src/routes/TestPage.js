import React from 'react';
import { connect } from 'dva';
import Menu from "../components/TopMenu";
import styles from './IndexPage.css';


function TestPage() {
  return (
    <div className={styles.normal}>
      <Menu />
    </div>
  );
}

TestPage.propTypes = {
};

export default connect()(TestPage);
