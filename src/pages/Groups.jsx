export default function Blog() {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-gray-300 border-collapse">
        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
          <tr className="border-b border-gray-300">
            <th scope="col" className="px-6 py-3 border border-gray-300">
              Group A
            </th>
            <th scope="col" className="px-6 py-3 border border-gray-300">
              Goals For
            </th>
            <th scope="col" className="px-6 py-3 border border-gray-300">
              Goals Against
            </th>
            <th scope="col" className="px-6 py-3 border border-gray-300">
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white dark:bg-gray-800 border-b border-gray-300">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-gray-300"
            >
              Mexico
            </th>
            <td className="px-6 py-4 border border-gray-300">20</td>
            <td className="px-6 py-4 border border-gray-300">5</td>
            <td className="px-6 py-4 border border-gray-300">9</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 border-b border-gray-300">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-gray-300"
            >
              A2
            </th>
            <td className="px-6 py-4 border border-gray-300">10</td>
            <td className="px-6 py-4 border border-gray-300">5</td>
            <td className="px-6 py-4 border border-gray-300">6</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 border-b border-gray-300">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-gray-300"
            >
              A3
            </th>
            <td className="px-6 py-4 border border-gray-300">2</td>
            <td className="px-6 py-4 border border-gray-300">5</td>
            <td className="px-6 py-4 border border-gray-300">0</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 border-b border-gray-300">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-gray-300"
            >
              A4
            </th>
            <td className="px-6 py-4 border border-gray-300">10</td>
            <td className="px-6 py-4 border border-gray-300">5</td>
            <td className="px-6 py-4 border border-gray-300">3</td>
          </tr>
        </tbody>
      </table>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Group B
            </th>
            <th scope="col" className="px-6 py-3">
              Goals For
            </th>
            <th scope="col" className="px-6 py-3">
              Goals Against
            </th>
            <th scope="col" className="px-6 py-3">
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Canada
            </th>
            <td className="px-6 py-4">20</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">9</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              B2
            </th>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">6</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              B3
            </th>
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">0</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              B4
            </th>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">3</td>
          </tr>
        </tbody>
      </table>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Group C
            </th>
            <th scope="col" className="px-6 py-3">
              Goals For
            </th>
            <th scope="col" className="px-6 py-3">
              Goals Against
            </th>
            <th scope="col" className="px-6 py-3">
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              C1
            </th>
            <td className="px-6 py-4">20</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">9</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              C2
            </th>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">6</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              C3
            </th>
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">0</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              C4
            </th>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">3</td>
          </tr>
        </tbody>
      </table>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Group D
            </th>
            <th scope="col" className="px-6 py-3">
              Goals For
            </th>
            <th scope="col" className="px-6 py-3">
              Goals Against
            </th>
            <th scope="col" className="px-6 py-3">
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              United States
            </th>
            <td className="px-6 py-4">20</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">9</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              D2
            </th>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">6</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              D3
            </th>
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">0</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              D4
            </th>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">3</td>
          </tr>
        </tbody>
      </table>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Group E
            </th>
            <th scope="col" className="px-6 py-3">
              Goals For
            </th>
            <th scope="col" className="px-6 py-3">
              Goals Against
            </th>
            <th scope="col" className="px-6 py-3">
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              E1
            </th>
            <td className="px-6 py-4">20</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">9</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              E2
            </th>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">6</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              E3
            </th>
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">0</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              E4
            </th>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">3</td>
          </tr>
        </tbody>
      </table>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Group F
            </th>
            <th scope="col" className="px-6 py-3">
              Goals For
            </th>
            <th scope="col" className="px-6 py-3">
              Goals Against
            </th>
            <th scope="col" className="px-6 py-3">
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              F1
            </th>
            <td className="px-6 py-4">20</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">9</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              F2
            </th>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">6</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              F3
            </th>
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">0</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              F4
            </th>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">3</td>
          </tr>
        </tbody>
      </table>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Group G
            </th>
            <th scope="col" className="px-6 py-3">
              Goals For
            </th>
            <th scope="col" className="px-6 py-3">
              Goals Against
            </th>
            <th scope="col" className="px-6 py-3">
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              G1
            </th>
            <td className="px-6 py-4">20</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">9</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              G2
            </th>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">6</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              G3
            </th>
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">0</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              G4
            </th>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">3</td>
          </tr>
        </tbody>
      </table>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Group H
            </th>
            <th scope="col" className="px-6 py-3">
              Goals For
            </th>
            <th scope="col" className="px-6 py-3">
              Goals Against
            </th>
            <th scope="col" className="px-6 py-3">
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              H1
            </th>
            <td className="px-6 py-4">20</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">9</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              H2
            </th>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">6</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              H3
            </th>
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">0</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              H4
            </th>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">3</td>
          </tr>
        </tbody>
      </table>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Group I
            </th>
            <th scope="col" className="px-6 py-3">
              Goals For
            </th>
            <th scope="col" className="px-6 py-3">
              Goals Against
            </th>
            <th scope="col" className="px-6 py-3">
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              I1
            </th>
            <td className="px-6 py-4">20</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">9</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              I2
            </th>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">6</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              I3
            </th>
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">0</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              I4
            </th>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">3</td>
          </tr>
        </tbody>
      </table>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Group J
            </th>
            <th scope="col" className="px-6 py-3">
              Goals For
            </th>
            <th scope="col" className="px-6 py-3">
              Goals Against
            </th>
            <th scope="col" className="px-6 py-3">
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              J1
            </th>
            <td className="px-6 py-4">20</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">9</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              J2
            </th>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">6</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              J3
            </th>
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">0</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              J4
            </th>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">3</td>
          </tr>
        </tbody>
      </table>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Group K
            </th>
            <th scope="col" className="px-6 py-3">
              Goals For
            </th>
            <th scope="col" className="px-6 py-3">
              Goals Against
            </th>
            <th scope="col" className="px-6 py-3">
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              K1
            </th>
            <td className="px-6 py-4">20</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">9</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              K2
            </th>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">6</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              K3
            </th>
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">0</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              K4
            </th>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">3</td>
          </tr>
        </tbody>
      </table>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Group L
            </th>
            <th scope="col" className="px-6 py-3">
              Goals For
            </th>
            <th scope="col" className="px-6 py-3">
              Goals Against
            </th>
            <th scope="col" className="px-6 py-3">
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              L1
            </th>
            <td className="px-6 py-4">20</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">9</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              L2
            </th>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">6</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              L3
            </th>
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">0</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              L4
            </th>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
