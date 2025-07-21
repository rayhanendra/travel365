import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@heroui/react';

function NavigationBar() {
  return (
    <div className="p-4 flex justify-between items-center">
      <Button color="primary" size="sm">
        Travel365
      </Button>
      <div className="flex items-center gap-2 md:gap-3">
        <Button
          variant="light"
          color="primary"
          size="sm"
          startContent={
            <span className="material-symbols-outlined text-lg md:text-xl">
              help
            </span>
          }
        >
          <span className="hidden sm:inline">Help</span>
        </Button>
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="light"
              size="sm"
              endContent={
                <span className="material-symbols-outlined text-sm">
                  expand_more
                </span>
              }
            >
              <span className="hidden sm:inline">Manage Booking</span>
              <span className="sm:hidden">Menu</span>
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Booking actions">
            <DropdownItem
              key="bookings"
              startContent={
                <span className="material-symbols-outlined text-sm">book</span>
              }
            >
              My Bookings
            </DropdownItem>
            <DropdownItem
              key="cancel"
              startContent={
                <span className="material-symbols-outlined text-sm">
                  cancel
                </span>
              }
            >
              Cancel Reservation
            </DropdownItem>
            <DropdownItem
              key="modify"
              startContent={
                <span className="material-symbols-outlined text-sm">edit</span>
              }
            >
              Modify Dates
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}

export default NavigationBar;
