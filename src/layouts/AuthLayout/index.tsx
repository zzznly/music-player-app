interface Props {
  children: React.ReactNode;
}
export default function AuthLayout({ children }: Props): JSX.Element {
  return (
    <div className="layout">
      <div className="main">{children}</div>
    </div>
  );
}
