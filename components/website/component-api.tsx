type TableLine = {
  prop: string;
  type: string;
  default: string;
  description: string;
};

type TableProps = {
  lines: TableLine[];
};

export default function ComponentApi({ lines }: TableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {lines.map((line, index) => (
          <tr key={index}>
            <td>{line.prop}</td>
            <td>{line.type}</td>
            <td>{line.default}</td>
            <td>{line.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
