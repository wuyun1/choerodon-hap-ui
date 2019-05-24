import { Lang } from './enum';
import zh_CN from './zh_CN';

export interface Locale {
  lang: Lang;
  Table: {
    show_cached_seletion;
    hide_cached_seletion;
    edit_button;
    create_button;
    save_button;
    cancel_button;
    delete_button;
    remove_button;
    reset_button;
    query_button;
    expand_button;
    collapse_button;
    export_button;
    advanced_search;
    dirty_info;
    restore;
    empty_data;
    choose_export_columns;
    column_name;
    filter_bar_placeholder;
  };
  Pagination: {
    records_per_page;
  };
  Upload: {
    file_selection;
    click_to_upload;
    upload_success;
    upload_failure;
    no_file;
    upload_path_unset;
    not_acceptable_prompt;
    file_list_max_length;
  },
  Modal: {
    ok;
    cancel;
    confirm_modal_title;
    success_modal_title;
    error_modal_title;
    warning_modal_title;
  },
  DataSet: {
    unsaved_data_confirm;
    invalid_query_dataset;
    delete_selected_row_confirm;
    query_failure;
    submit_success;
    submit_failure;
  },
  Utils: {
    no_new_row_when_head_unselected;
  },
  DatePicker: {
    value_missing;
  },
  EmailField: {
    value_missing;
    type_mismatch;
  },
  IntlField: {
    modal_title;
  },
  NumberField: {
    value_missing;
  },
  Radio: {
    value_missing;
  },
  SelectBox: {
    value_missing;
  },
  Select: {
    value_missing;
  },
  UrlField: {
    value_missing;
    type_mismatch;
  },
  Validator: {
    bad_input;
    pattern_mismatch;
    range_overflow;
    range_underflow;
    step_mismatch;
    too_long;
    too_short;
    type_mismatch;
    value_missing;
    unique;
    unknown;
  },
  Icon: {
    icons;
    whatsNew;
    direction;
    suggestion;
    edit;
    data;
    other;
    series;
  }
}

export default zh_CN;
