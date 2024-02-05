export const TableHeader = ({ children, ...props }) => {
    return (<thead {...props}>
        {children}
    </thead>)
}