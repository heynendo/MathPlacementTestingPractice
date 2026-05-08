import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Input from "@/components/ui/Input";
import Spinner from "@/components/ui/Spinner";
import { useState } from "react";
import Radio from "@/components/ui/Radio";
import Checkbox from "@/components/ui/Checkbox";

export default function DemoUI() {

  const [answer, setAnswer] = useState('')
  const [selected, setSelected] = useState<string[]>([])

  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "48px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "white" }}>UI Component Demo</h1>

      {/* BUTTONS */}
      <section
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <h2 style={{ fontWeight: 600, color: "var(--color-text)" }}>
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
          <Button variant="alert">Alert</Button>
          <Button variant="success">Success</Button>
          <Button variant="primary" size="square">
            1
          </Button>
          <Button variant="flag" size="square">
            1
          </Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
          <Button variant="light" size="lg">
            Large Light
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
        <h2 style={{ fontWeight: 600, color: "var(--color-text)" }}>
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
          <Badge variant="flag">Flag</Badge>
          <Badge variant="alert">Alert</Badge>
        </div>
      </section>

      {/* CARDS */}
      <section
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <h2 style={{ fontWeight: 600, color: "var(--color-text)" }}>
          Card
        </h2>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Card
            title="Default Card"
            subtitle="With a subtitle"
            style={{ flex: 1, minWidth: "200px" }}
            footer={
              <Button variant="primary" size="md">
                Action
              </Button>
            }
          >
            Card body content goes here.
          </Card>
        </div>
      </section>

      <section
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <h2 style={{ fontWeight: 600, color: "var(--color-text)" }}>
          Card
        </h2>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Card
            title="Badges"
            style={{ flex: 1, minWidth: "200px" }}
            footer={
              <Button variant="primary" size="md">
                Action
              </Button>
            }
          >
            <div
              style={{
                display: "flex",
                gap: "8px",
                margin: "15px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="flag">Flag</Badge>
              <Badge variant="alert">Alert</Badge>
            </div>
          </Card>
        </div>
      </section>

      {/* INPUTS */}
      <section
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <h2 style={{ fontWeight: 600, color: "var(--color-text)" }}>
          Input
        </h2>
        <Card
          title="Default Card"
          subtitle="With a subtitle"
          style={{ flex: 1, minWidth: "200px" }}
          footer={
            <Button variant="primary" size="md">
              Action
            </Button>
          }
        >
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

          <Radio
            name="question-1"
            value={answer}
            onChange={setAnswer}
            options={[
              { label: 'Option A', value: 'a' },
              { label: 'Option B', value: 'b' },
              { label: 'Option C', value: 'c' },
            ]}
          />
          
          <Checkbox
            value={selected}
            onChange={setSelected}
            options={[
              { label: 'Option A', value: 'a' },
              { label: 'Option B', value: 'b' },
              { label: 'Option C', value: 'c' },
            ]}
          />

        </div>
        </Card>
      </section>

      {/* SPINNERS */}
      <section
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <h2 style={{ fontWeight: 600, color: "var(--color-text)" }}>
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
