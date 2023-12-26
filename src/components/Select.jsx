
export function Select({ children, ...rest }) {
  return (<select {...rest}>
    {children}
  </select>)
}

function Option({ children, value }) {
  return (
    <option value={value}>{children}</option>
  )
}

Select.Option = Option;
