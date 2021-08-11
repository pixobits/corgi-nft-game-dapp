import React, { useState, useEffect } from 'react';
import getBlockchain from '../../ethereum';

function TestBlockChain() {
  const [simpleStorage, setSimpleStorage] = useState(undefined);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const { simpleStorage } = await getBlockchain();
      const data = await simpleStorage.readData();
      setSimpleStorage(simpleStorage);
      setData(data);
    };
    init();
  }, []);

  const updateData = async e => {
    e.preventDefault();
    const data = e.target.elements[0].value;
    const tx = await simpleStorage.updateData(data);
    await tx.wait();
    const newData = await simpleStorage.readData();
    setData(newData);
  };

  if (
    typeof simpleStorage === 'undefined'
    || typeof data === 'undefined'
  ) {
    return 'Loading...';
  }

  return (
    <div>
      <div className='row'>
        <div className='col-sm-6'>
          <h2>Test Data Blockchain BSC</h2>
          <p>{data.toString()}</p>
        </div>
        <div className='col-sm-6'>
          <h2>Change data</h2>
          <form className="form-inline mb-4" onSubmit={e => updateData(e)}>
            <input
              type="text"
              className="form-control mr-2"
              placeholder="Input change data"
            />
            <button
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default TestBlockChain;