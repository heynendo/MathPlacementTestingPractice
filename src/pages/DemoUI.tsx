import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Input from "@/components/ui/Input";
import Spinner from "@/components/ui/Spinner";

export default function DemoUI() {
  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "48px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>UI Component Demo</h1>

      {/* BUTTONS */}
      <section
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <h2 style={{ fontWeight: 600, color: "var(--color-text-muted)" }}>
          Button
        </h2>
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </section>

      {/* BADGES */}
      <section
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <h2 style={{ fontWeight: 600, color: "var(--color-text-muted)" }}>
          Badge
        </h2>
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
        </div>
      </section>

      {/* CARDS */}
      <section
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <h2 style={{ fontWeight: 600, color: "var(--color-text-muted)" }}>
          Card
        </h2>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Card
            title="Default Card"
            subtitle="With a subtitle"
            style={{ flex: 1, minWidth: "200px" }}
            footer={
              <Button variant="primary" size="sm">
                Action
              </Button>
            }
          >
            Card body content goes here.
          </Card>
          <Card
            title="Flat Card"
            subtitle="No border, surface bg"
            flat
            style={{ flex: 1, minWidth: "200px" }}
          >
            Card body content goes here.
          </Card>
        </div>
      </section>

      {/* INPUTS */}
      <section
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <h2 style={{ fontWeight: 600, color: "var(--color-text-muted)" }}>
          Input
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "400px",
          }}
        >
          <Input id="default" label="Default" placeholder="Placeholder text" />
          <Input
            id="hint"
            label="With hint"
            hint="This is a helpful hint."
            placeholder="Placeholder text"
          />
          <Input
            id="error"
            label="With error"
            error="This field is required."
            placeholder="Placeholder text"
          />
          <Input
            id="disabled"
            label="Disabled"
            placeholder="Placeholder text"
            disabled
          />
        </div>
      </section>

      {/* SPINNERS */}
      <section
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <h2 style={{ fontWeight: 600, color: "var(--color-text-muted)" }}>
          Spinner
        </h2>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Spinner size={16} />
          <Spinner size={24} />
          <Spinner size={40} />
          <Spinner size={24} color="var(--color-danger)" />
          <Spinner size={24} color="var(--color-success)" />
        </div>
      </section>
    </div>
  );
}
