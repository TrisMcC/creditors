import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Button, TableHeaderCell, Creditor, Total } from '../components/index';

const DATA_URL =
  'https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json';

export default function Home() {
  const [{ creditors, checked }, setData] = useState({
    creditors: null,
    checked: [],
  });

  function setCreditors(c) {
    setData((p) => ({ ...p, creditors: c, checked: c.map((m) => m.id) }));
  }

  function addDebt() {
    setData((p) => ({
      ...p,
      creditors: [
        ...p.creditors,
        {
          id: p.creditors.length + 1,
          creditorName: '',
          firstName: '',
          lastName: '',
          minPaymentPercentage: null,
          balance: 0,
        },
      ],
    }));
  }

  function removeDebt() {
    setData((p) => ({
      ...p,
      creditors: p.creditors.filter((c) => p.checked.indexOf(c.id) === -1),
      checked: [],
    }));
  }

  function updateDebt(d) {
    setData((p) => ({
      ...p,
      creditors: p.creditors.map((c) => {
        if (c.id === d.id) {
          return {
            ...d,
            minPaymentPercentage: parseFloat(d.minPaymentPercentage),
            balance: parseFloat(d.balance),
          };
        }
        return c;
      }),
    }));
  }

  function setChecked(id, isChecked) {
    setData((p) => ({
      ...p,
      checked: isChecked
        ? [...p.checked, id]
        : p.checked.filter((i) => i !== id),
    }));
  }

  function toggleAll(e) {
    setData((p) => ({
      ...p,
      checked: e.target.checked ? p.creditors.map((m) => m.id) : [],
    }));
  }

  async function fetchData() {
    const response = await fetch(DATA_URL);
    setCreditors(await response.json());
  }

  useEffect(fetchData, []);

  if (!creditors) {
    return null;
  }

  return (
    <div className="w-164 mx-auto my-8">
      <Head>
        <title>StratFS - React Test: {creditors.length} Rows</title>
      </Head>
      <h1 className="text-3xl text-center">StratFS - React Test</h1>
      <table className="mx-auto w-full mt-8">
        <thead>
          <tr>
            <th className="w-24">
              <input
                type="checkbox"
                onChange={toggleAll}
                checked={checked.length === creditors.length}
              />
            </th>
            <TableHeaderCell className="w-32">Creditor</TableHeaderCell>
            <TableHeaderCell className="w-28">First Name</TableHeaderCell>
            <TableHeaderCell className="w-28">Last Name</TableHeaderCell>
            <TableHeaderCell className="w-20" right>
              Min
              <br />
              Pay %
            </TableHeaderCell>
            <TableHeaderCell className="w-32" right>
              Balance
            </TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {creditors.map((row) => (
            <Creditor
              key={row.id}
              checked={checked.indexOf(row.id) > -1}
              setChecked={setChecked}
              updateDebt={updateDebt}
              creditor={row}
            />
          ))}
        </tbody>
      </table>
      <div className="flex space-x-1 py-1">
        <Button onClick={addDebt}>Add Debt</Button>
        <Button disabled={!checked.length} onClick={removeDebt}>
          Remove Debt
        </Button>
      </div>
      <div className="mx-auto font-bold bg-lightBlue-300 py-1 flex justify-between">
        <span className="w-24 text-right">Total:</span>
        <span>
          <Total checked={checked} creditors={creditors} />
        </span>
      </div>
      <div className="mx-auto flex font-bold">
        <span className="pr-16">Total Row Count: {creditors.length}</span>
        <span>Check Row Count: {checked.length}</span>
      </div>
    </div>
  );
}
