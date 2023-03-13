import { CommonModule } from '@angular/common'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AccordionComponent } from '../components/Accordion/Accordion.component'
import { ActionDropdownComponent } from '../components/ActionDropdown/ActionDropdown.component'
import { ActionMenuComponent } from '../components/ActionMenu/ActionMenu.component'
import { AlertComponent } from '../components/Alert/Alert.component'
import { AvatarComponent } from '../components/Avatar/Avatar.component'
import { BadgeComponent } from '../components/Badge/Badge.component'
import { ButtonComponent } from '../components/Button/Button.component'
import { CardComponent } from '../components/Card/Card.component'
import { CardDnDComponent } from '../components/CardDnD/CardDnD.component'
import { CardContainerComponent } from '../components/CardContainer/CardContainer.component'
import { ChatComponent } from '../components/Chat/Chat.component'
import { CheckboxComponent } from '../components/Checkbox/Checkbox.component'
import { ChipComponent } from '../components/Chip/Chip.component'
import { CodeTagComponent } from '../components/CodeTag/CodeTag.component'
import { ColorMenuComponent } from '../components/ColorMenu/ColorMenu.component'
import { ColorSelectComponent } from '../components/ColorSelect/ColorSelect.component'
import { ColorSwatchComponent } from '../components/ColorSwatch/ColorSwatch.component'
import { DatePickerComponent } from '../components/DatePicker/DatePicker.component'
import { DialogComponent } from '../components/Dialog/Dialog.component'
import { EmojiPickerComponent } from '../components/EmojiPicker/EmojiPicker.component'
import { GridComponent } from '../components/Grid/Grid.component'
import { HorizontalStepper } from '../components/HorizontalStepper/HorizontalStepper.component'
import { IconButtonComponent } from '../components/IconButton/IconButton.component'
import { InlineAlertComponent } from '../components/InlineAlert/InlineAlert.component'
import { InputComponent } from '../components/Input/Input.component'
import { FieldComponent } from '../components/Field/Field.component'
import { FileDropComponent } from '../components/FileDrop/FileDrop.component'
import { FilePickerComponent } from '../components/FilePicker/FilePicker.component'
import { FileStatusComponent } from '../components/FileStatus/FileStatus.component'
import { LinkComponent } from '../components/Link/Link.component'
import { ListComponent } from '../components/List/List.component'
import { PaginationComponent } from '../components/Pagination/Pagination.component'
import { PhoneCodeMenuComponent } from '../components/PhoneCodeMenu/PhoneCodeMenu.component'
import { PopoverComponent } from '../components/Popover/Popover.component'
import { ProgressComponent } from '../components/Progress/Progress.component'
import { RadioComponent } from '../components/Radio/Radio.component'
import { RichTextComponent } from '../components/RichText/RichText.component'
import { SearchComponent } from '../components/Search/Search.component'
import { SegmentComponent } from '../components/Segment/Segment.component'
import { SegmentedControlComponent } from '../components/SegmentedControl/SegmentedControl.component'
import { SegmentedIconControlComponent } from '../components/SegmentedIconControl/SegmentedIconControl.component'
import { SelectComponent } from '../components/Select/Select.component'
import { SelectMenuComponent } from '../components/SelectMenu/SelectMenu.component'
import { SkeletonComponent } from '../components/Skeleton/Skeleton.component'
import { SpinnerComponent } from '../components/Spinner/Spinner.component'
import { TableComponent } from '../components/Table/Table.component'
import { TabsComponent } from '../components/Tabs/Tabs.component'
import { TagComponent } from '../components/Tag/Tag.component'
import { TextareaComponent } from '../components/Textarea/Textarea.component'
import { TextComponent } from '../components/Text/Text.component'
import { TileControlComponent } from '../components/TileControl/TileControl.component'
import { TimePickerComponent } from '../components/TimePicker/TimePicker.component'
import { TitleComponent } from '../components/Title/Title.component'
import { ToastManagerComponent } from '../components/ToastManager/ToastManager.component'
import { ToggleComponent } from '../components/Toggle/Toggle.component'
import { TooltipComponent } from '../components/Tooltip/Tooltip.component'
import { VerticalStepper } from '../components/VerticalStepper/VerticalStepper.component'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    ActionDropdownComponent,
    ActionMenuComponent,
    AlertComponent,
    AvatarComponent,
    BadgeComponent,
    ButtonComponent,
    CardComponent,
    CardDnDComponent,
    CardContainerComponent,
    ChatComponent,
    CheckboxComponent,
    ChipComponent,
    CodeTagComponent,
    ColorMenuComponent,
    ColorSelectComponent,
    ColorSwatchComponent,
    DatePickerComponent,
    DialogComponent,
    EmojiPickerComponent,
    GridComponent,
    HorizontalStepper,
    IconButtonComponent,
    InlineAlertComponent,
    InputComponent,
    FieldComponent,
    FileDropComponent,
    FilePickerComponent,
    FileStatusComponent,
    LinkComponent,
    ListComponent,
    PaginationComponent,
    PhoneCodeMenuComponent,
    PopoverComponent,
    ProgressComponent,
    RadioComponent,
    RichTextComponent,
    SearchComponent,
    SegmentComponent,
    SegmentedControlComponent,
    SegmentedIconControlComponent,
    SelectComponent,
    SelectMenuComponent,
    SkeletonComponent,
    SpinnerComponent,
    TableComponent,
    TabsComponent,
    TagComponent,
    TextareaComponent,
    TextComponent,
    TileControlComponent,
    TimePickerComponent,
    TitleComponent,
    ToastManagerComponent,
    ToggleComponent,
    TooltipComponent,
    VerticalStepper,
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
