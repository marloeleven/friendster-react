import React, { useRef, useState, useEffect, useCallback } from 'react';
import cx from 'classnames';

import List from 'components/List';
import FlexContent from 'components/FlexContent';

import styles from './Table.module.css';

const Row = ({ className, children, ...props }) => (
  <tr className={cx(styles.row, className)} {...props}>
    {children}
  </tr>
);

const Head = ({ className, children, ...props }) => (
  <th className={cx(styles.header, className)} {...props}>
    {children}
  </th>
);

const Cell = ({ className, children, ...props }) => (
  <td className={cx(styles.cell, className)} {...props}>
    {children}
  </td>
);

const THead = ({ className, children, ...props }) => (
  <thead className={className} {...props}>
    {children}
  </thead>
);

const TBody = ({ className, children, ...props }) => (
  <tbody className={className} {...props}>
    {children}
  </tbody>
);

const renderItems = (items, Component = Cell) =>
  items.map((children, i) => <Component key={i}>{children}</Component>);

const Rows = ({ items, Component = Cell }) => (
  <Row>{renderItems(items, Component)}</Row>
);

const Headers = ({ items }) => (
  <THead>
    <Rows Component={Head} items={items} />
  </THead>
);

const Cells = ({ items }) => <Rows items={items} />;

const MultiCells = ({ items }) => (
  <TBody>
    {items.map((array, i) => (
      <Cells key={i} items={array} />
    ))}
  </TBody>
);

const Table = ({ headers, rows, className, children, ...props }) => {
  const containerRef = useRef(null);
  const tableRef = useRef(null);
  const theadCopyRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  const copyHeaderWidth = useCallback(() => {
    const table = tableRef.current;
    const thArray = Array.from(table.querySelectorAll('th'));
    const firstRow = table.querySelectorAll('tbody tr').item(0);
    const theadCopy = theadCopyRef.current;
    const theadCopyArray = Array.from(theadCopy.querySelectorAll('li'));

    thArray.forEach((el, i) => {
      const width = `${el.getBoundingClientRect().width}px`;

      theadCopyArray[i].style.width = width;

      if (firstRow) {
        firstRow.querySelectorAll('td').item(i).style.width = width;
      }
    });
  }, []);

  useEffect(() => {
    copyHeaderWidth();

    setLoaded(true);
  }, [copyHeaderWidth]);

  return (
    <FlexContent
      v
      h
      column
      className={cx(styles.container, className, { [styles.loaded]: loaded })}
      {...props}
      ref={containerRef}
    >
      <List className={cx(styles.headerCopy)} ref={theadCopyRef}>
        {headers.map((children, i) => (
          <List.Item key={i}>{children}</List.Item>
        ))}
      </List>

      <table className={styles.table} ref={tableRef}>
        <Headers items={headers} />
        <MultiCells items={rows} />
      </table>
    </FlexContent>
  );
};

export default Table;
