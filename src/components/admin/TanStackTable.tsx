import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnDef,
  flexRender,
  SortingState,
} from "@tanstack/react-table";
import { useState } from "react";

function TanStackTable<T>(
  columns: ColumnDef<T>[],
  data: T[],
  showPagination: boolean = false
) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const table = useReactTable({
    columns,
    data,
    state: {
      sorting,
      pagination: {
        pageSize: 6,
        pageIndex: pageIndex,
      },
    },
    onSortingChange: setSorting,

    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
  return (
    <div>
      <table className=" rounded-md w-full  ">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th className=" p-5" key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table
            .getRowModel()
            .rows.slice(0, 10)
            .map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td
                        className="p-5 border-y-slate-200 border-y-2   text-center  "
                        key={cell.id}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>

      {showPagination && (
        <div className=" mt-10 flex justify-center items-center ">
          <button
            className=" py-1 px-3 mx-2 bg-blue-500 text-white rounded-lg disabled:bg-slate-300 "
            disabled={!table.getCanPreviousPage()}
            onClick={() => setPageIndex((prev) => prev - 1)}
          >
            Prev
          </button>
          <p>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </p>
          <button
            className=" py-1 px-3 mx-2 bg-blue-500 text-white rounded-lg disabled:bg-slate-300 "
            disabled={!table.getCanNextPage()}
            onClick={() => setPageIndex((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default TanStackTable;
