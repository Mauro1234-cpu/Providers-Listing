import type { Meta, StoryObj } from "@storybook/react-vite";

import { DropdownMenu, Icons } from "@/components";
import { Breadcrumb } from "./breadcrumb";

const meta: Meta<typeof Breadcrumb.Root> = {
  title: "Components/UI/Breadcrumb",
  component: Breadcrumb.Root,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Breadcrumb.Root>;

export default meta;

type Story = StoryObj<typeof Breadcrumb.Root>;

export const Basic: Story = {
  render: () => {
    return (
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link to="/">Home</Breadcrumb.Link>
          </Breadcrumb.Item>

          <Breadcrumb.Separator />

          <Breadcrumb.Item>
            <Breadcrumb.Link to="/docs">Docs</Breadcrumb.Link>
          </Breadcrumb.Item>

          <Breadcrumb.Separator />

          <Breadcrumb.Item>
            <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    );
  },
};

export const WithEllipsisDropdown: Story = {
  render: () => {
    return (
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link to="/">Home</Breadcrumb.Link>
          </Breadcrumb.Item>

          <Breadcrumb.Separator />

          <Breadcrumb.Item>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="flex items-center gap-1">
                <Breadcrumb.Ellipsis className="h-4 w-4" />

                <span className="sr-only">Toggle menu</span>
              </DropdownMenu.Trigger>

              <DropdownMenu.Content align="start">
                <DropdownMenu.Item>
                  <a href="/docs">Documentation</a>
                </DropdownMenu.Item>

                <DropdownMenu.Item>
                  <a href="/themes">Themes</a>
                </DropdownMenu.Item>

                <DropdownMenu.Item>
                  <a href="https://github.com/">Github</a>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Breadcrumb.Item>

          <Breadcrumb.Separator />

          <Breadcrumb.Item>
            <Breadcrumb.Link to="/docs/components">Components</Breadcrumb.Link>
          </Breadcrumb.Item>

          <Breadcrumb.Separator />

          <Breadcrumb.Item>
            <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    );
  },
};

export const WithDropdownMenu: Story = {
  render: () => {
    return (
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link to="/">Home</Breadcrumb.Link>
          </Breadcrumb.Item>

          <Breadcrumb.Separator />

          <Breadcrumb.Item>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="flex items-center gap-1">
                Components
                <Icons.ChevronDown />
              </DropdownMenu.Trigger>

              <DropdownMenu.Content align="start">
                <DropdownMenu.Item>Documentation</DropdownMenu.Item>

                <DropdownMenu.Item>Themes</DropdownMenu.Item>

                <DropdownMenu.Item>GitHub</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Breadcrumb.Item>

          <Breadcrumb.Separator />

          <Breadcrumb.Item>
            <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    );
  },
};

export const WithCustomSeparator: Story = {
  render: () => {
    return (
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link to="/">Home</Breadcrumb.Link>
          </Breadcrumb.Item>

          <Breadcrumb.Separator>
            <Icons.Slash />
          </Breadcrumb.Separator>

          <Breadcrumb.Item>
            <Breadcrumb.Link to="/components">Components</Breadcrumb.Link>
          </Breadcrumb.Item>

          <Breadcrumb.Separator>
            <Icons.Slash />
          </Breadcrumb.Separator>

          <Breadcrumb.Item>
            <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    );
  },
};

export const WithAsChildExternalLink: Story = {
  render: () => {
    return (
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link to="/">Home</Breadcrumb.Link>
          </Breadcrumb.Item>

          <Breadcrumb.Separator />

          <Breadcrumb.Item>
            <Breadcrumb.Link asChild>
              <a href="https://www.google.com" rel="noopener noreferrer">
                Google
              </a>
            </Breadcrumb.Link>
          </Breadcrumb.Item>

          <Breadcrumb.Separator />

          <Breadcrumb.Item>
            <Breadcrumb.Page>Current Page</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    );
  },
};
