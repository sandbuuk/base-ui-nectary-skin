import { CommonModule } from '@angular/common'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AccordionComponent } from '../components/Accordion/Accordion.component'
import { ActionMenuComponent } from '../components/ActionMenu/ActionMenu.component'
import { AlertComponent } from '../components/Alert/Alert.component'
import { AvatarComponent } from '../components/Avatar/Avatar.component'
import { ButtonComponent } from '../components/Button/Button.component'
import { CardComponent } from '../components/Card/Card.component'
import { CardContainerComponent } from '../components/CardContainer/CardContainer.component'
import { ChatComponent } from '../components/Chat/Chat.component'
import { CheckboxComponent } from '../components/Checkbox/Checkbox.component'
import { DatePickerComponent } from '../components/DatePicker/DatePicker.component'
import { DialogComponent } from '../components/Dialog/Dialog.component'
import { DropdownComponent } from '../components/Dropdown/Dropdown.component'
import { GridComponent } from '../components/Grid/Grid.component'
import { HorizontalStepper } from '../components/HorizontalStepper/HorizontalStepper.component'
import { IconButtonComponent } from '../components/IconButton/IconButton.component'
import { InputComponent } from '../components/Input/Input.component'
import { LinkComponent } from '../components/Link/Link.component'
import { ListComponent } from '../components/List/List.component'
import { PaginationComponent } from '../components/Pagination/Pagination.component'
import { PopoverComponent } from '../components/Popover/Popover.component'
import { RadioComponent } from '../components/Radio/Radio.component'
import { SearchComponent } from '../components/Search/Search.component'
import { SegmentComponent } from '../components/Segment/Segment.component'
import { SegmentedControlComponent } from '../components/SegmentedControl/SegmentedControl.component'
import { SegmentedIconControlComponent } from '../components/SegmentedIconControl/SegmentedIconControl.component'
import { SelectComponent } from '../components/Select/Select.component'
import { SpinnerComponent } from '../components/Spinner/Spinner.component'
import { TableComponent } from '../components/Table/Table.component'
import { TabsComponent } from '../components/Tabs/Tabs.component'
import { TagComponent } from '../components/Tag/Tag.component'
import { TextareaComponent } from '../components/Textarea/Textarea.component'
import { TextComponent } from '../components/Text/Text.component'
import { TileControlComponent } from '../components/TileControl/TileControl.component'
import { TimePickerComponent } from '../components/TimePicker/TimePicker.component'
import { TitleComponent } from '../components/Title/Title.component'
import { ToggleComponent } from '../components/Toggle/Toggle.component'
import { TooltipComponent } from '../components/Tooltip/Tooltip.component'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AccordionComponent,
    ActionMenuComponent,
    AlertComponent,
    AppComponent,
    AvatarComponent,
    ButtonComponent,
    CardComponent,
    CardContainerComponent,
    ChatComponent,
    CheckboxComponent,
    DatePickerComponent,
    DialogComponent,
    DropdownComponent,
    GridComponent,
    HorizontalStepper,
    IconButtonComponent,
    InputComponent,
    LinkComponent,
    ListComponent,
    PaginationComponent,
    PopoverComponent,
    RadioComponent,
    SearchComponent,
    SegmentComponent,
    SegmentedControlComponent,
    SegmentedIconControlComponent,
    SelectComponent,
    SpinnerComponent,
    TableComponent,
    TabsComponent,
    TagComponent,
    TextareaComponent,
    TextComponent,
    TileControlComponent,
    TimePickerComponent,
    TitleComponent,
    ToggleComponent,
    TooltipComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  exports: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
