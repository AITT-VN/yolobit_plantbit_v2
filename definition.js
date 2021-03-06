// Cảm biến độ ẩm đất
Blockly.Blocks['plantbit2_soil_sensor'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "plantbit_soil_sensor",
        "message0": "đọc độ ẩm đất (%%) %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ]
            ]
          }
        ],
        "output": "Number",
        "colour": "#009900",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['plantbit2_soil_sensor'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'round(translate(('+dropdown_name+'.read_analog()), 0, 4095, 0, 100))';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

// Cảm biến ánh sáng
Blockly.Blocks['plantbit2_light_sensor'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "plantbit_light_sensor",
        "message0": "đọc độ sáng ngoài trời (%%) %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "P1",
                "pin1"
              ],
              [
                "P0",
                "pin0"
              ],
              [
                "P2",
                "pin2"
              ]
            ]
          }
        ],
        "output": "Number",
        "colour": "#009900",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['plantbit2_light_sensor'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'round(translate(('+dropdown_name+'.read_analog()), 0, 4095, 0, 100))';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["plantbit2_dht_measure"] = {
  init: function() {
    this.jsonInit({
      message0: Blockly.Msg.BLOCK_PLANTBITV2_DHT_MEANSURE_MESSAGE0,
      args0: [
      ],
      previousStatement: null,
      nextStatement: null,
      colour: "#009900",
      tooltip: Blockly.Msg.BLOCK_PLANTBITV2_DHT_MEANSURE_TOOLTIP,
      helpUrl: Blockly.Msg.BLOCK_PLANTBITV2_DHT_MEANSURE_HELPURL
    });
  },
  getDeveloperVars: function() {
    return ['dht20'];
  }
};

Blockly.Blocks["plantbit2_dht_read"] = {
  init: function() {
    this.jsonInit({
      message0: Blockly.Msg.BLOCK_PLANTBITV2_DHT_READ_MESSAGE0,
      args0: [
        {
          type: "field_dropdown",
          name: "DATA",
          options: [
            [Blockly.Msg.BLOCK_PLANTBITV2_DHT_READ_MESSAGE1, "TEMP"],
            [Blockly.Msg.BLOCK_PLANTBITV2_DHT_READ_MESSAGE2, "HUMID"]
          ]
        }
      ],
      output: null,
      colour: "#009900",
      tooltip: Blockly.Msg.BLOCK_PLANTBITV2_DHT_READ_TOOLTIP,
      helpUrl: Blockly.Msg.BLOCK_PLANTBITV2_DHT_READ_HELPURL
    });
  },
  getDeveloperVars: function() {
    return ['dht20'];
  }
};

Blockly.Python["plantbit2_dht_measure"] = function(block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin, SoftI2C';
  Blockly.Python.definitions_["import_dht20"] = "from plantbit2_dht20 import DHT20";
  Blockly.Python.definitions_["import_create_dht20"] = "dht20 = DHT20(SoftI2C(scl=Pin(22), sda=Pin(21)))";
  var code = "dht20.read_dht20()\n";
  return code;
};

Blockly.Python["plantbit2_dht_read"] = function(block) {
  var dropdown_data = block.getFieldValue("DATA");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin, SoftI2C';
  Blockly.Python.definitions_["import_dht20"] = "from plantbit2_dht20 import DHT20";
  Blockly.Python.definitions_["import_create_dht20"] = "dht20 = DHT20(SoftI2C(scl=Pin(22), sda=Pin(21)))";
  var code = "";
  if (dropdown_data == "TEMP")
    code = "dht20.dht20_temperature()";
  else 
    code = "dht20.dht20_humidity()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['plantbit2_ultrasonic_create'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "type": "plantbit2_ultrasonic_create",
        "message0": Blockly.Msg.ULTRASONIC_CREATE_MESSAGE0,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "TRG",
            "options": [
              [
                "P10",
                "pin10"
              ],
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "ECH",
            "options": [
              [
                "P13",
                "pin13"
              ],
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#009900",
        "tooltip": Blockly.Msg.PLANTBITV2_ULTRASONIC_CREATE_TOOLTIP,
        "helpUrl": Blockly.Msg.PLANTBITV2_ULTRASONIC_CREATE_HELPURL
      }
    );
  },
  getDeveloperVars: function() {
    return ['ultrasonic_plant_bit'];
  }
};

Blockly.Python['plantbit2_ultrasonic_create'] = function(block) {
  var dropdown_trg = block.getFieldValue('TRG');
  var dropdown_ech = block.getFieldValue('ECH');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_ultrasonic'] = 'from plantbit2_hcsr04 import HCSR04';
  var code = 'ultrasonic_plant_bit = HCSR04(trigger_pin=' + dropdown_trg + '.pin, echo_pin=' + dropdown_ech + '.pin)\n';
  return code;
};

Blockly.Blocks['plantbit2_ultrasonic_read'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "plantbit_ultrasonic_read",
        "message0": Blockly.Msg.PLANTBITV2_ULTRASONIC_READ_MESSAGE0,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
              [
                "cm",
                "CM"
              ],
              [
                "mm",
                "MM"
              ]
            ]
          }
        ],
        "output": null,
        "colour": "#009900",
        "tooltip": Blockly.Msg.PLANTBITV2_ULTRASONIC_READ_TOOLTIP,
        "helpUrl": Blockly.Msg.PLANTBITV2_ULTRASONIC_READ_HELPURL
      }
    );
  },
  getDeveloperVars: function() {
    return ['ultrasonic_plant_bit'];
  }
};

Blockly.Python['plantbit2_ultrasonic_read'] = function(block) {
  var dropdown_type = block.getFieldValue('TYPE');
  // TODO: Assemble Python into code variable.
  var code = '';
  if (dropdown_type == 'CM') {
    code = 'ultrasonic_plant_bit.distance_cm()';
  } else {
    code = 'ultrasonic_plant_bit.distance_mm()';
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['plantbit2_ultrasonic_checkdistance'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "plantbit2_ultrasonic_checkdistance",
        "message0": Blockly.Msg.PLANTBITV2_ULTRASONIC_CHECK_MESSAGE0,
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "DISTANCE",
            "check": "Number"
          },
          {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
              [
                "cm",
                "CM"
              ],
              [
                "mm",
                "MM"
              ]
            ]
          }
        ],
        "output": "Boolean",
        "colour": "#009900",
        "tooltip": Blockly.Msg.PLANTBITV2_ULTRASONIC_CHECK_TOOLTIP,
        "helpUrl": Blockly.Msg.PLANTBITV2_ULTRASONIC_CHECK_HELPURL
      }
    );
  },
  getDeveloperVars: function() {
    return ['ultrasonic_plant_bit'];
  }
};

Blockly.Python['plantbit2_ultrasonic_checkdistance'] = function(block) {
  var value_distance = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('TYPE');
  // TODO: Assemble Python into code variable.
  var code = '';
  if (dropdown_type == 'CM')
    code = 'ultrasonic_plant_bit.distance_cm() > ' + value_distance;
  else
    code = 'ultrasonic_plant_bit.distance_mm() > ' + value_distance;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['plantbit2_ultrasonic_checkwater'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "plantbit_ultrasonic_checkwater",
        "message0": "lượng nước trong bể chứa (%%) , với mức A: %1 cm, mức B: %2 cm" ,
        "args0": [
          {
            "type": "input_value",
            "name": "A"
          },
          {
            "type": "input_value",
            "name": "B"
          }
        ],
        "output": "Number",
        "colour": "#009900",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  },
  getDeveloperVars: function() {
    return ['ultrasonic_plant_bit'];
  }
};

Blockly.Python['plantbit2_ultrasonic_checkwater'] = function(block) {
  var number_min = Blockly.Python.valueToCode(block, 'A', Blockly.Python.ORDER_ATOMIC);
  var number_max = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '100 - round(translate((ultrasonic_plant_bit.distance_cm()), '+number_min+', '+number_max+', 0, 100))';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['plantbit2_oled_create'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "plantbit_oled_create",
        "message0": Blockly.Msg.PLANTBITV2_OLED_CREATE_MESSAGE0,
        "args0": [
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#009900",
        "tooltip": Blockly.Msg.PLANTBITV2_OLED_CREATE_TOOLTIP,
        "helpUrl": Blockly.Msg.PLANTBITV2_OLED_CREATE_HELPURL
      }
    );
  },
  getDeveloperVars: function() {
    return ['lcd_oled'];
  }
};

Blockly.Python['plantbit2_oled_create'] = function(block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin, SoftI2C';
  Blockly.Python.definitions_['import_oled'] = 'from plantbit2_ssd1306 import SSD1306_I2C';
  // oled = SSD1306_I2C(oled_width, oled_height, i2c)
  var code = 'lcd_oled = SSD1306_I2C( 128, 64 , SoftI2C(scl=Pin(22), sda=Pin(21)))\n';
  return code;
};

Blockly.Blocks['plantbit2_oled_text'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "plantbit2_oled_text",
        "message0": Blockly.Msg.PLANTBITV2_OLED_TEXT_MESSAGE0,
        "args0": [
          {
            "type": "input_value",
            "name": "TEXT"
          },
          {
            "type": "input_value",
            "name": "X"
          },
          {
            "type": "input_value",
            "name": "Y"
          },
          {
            "type": "input_dummy"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#009900",
        "tooltip": Blockly.Msg.PLANTBITV2_OLED_TEXT_TOOLTIP,
        "helpUrl": Blockly.Msg.PLANTBITV2_OLED_TEXT_HELPURL
      }
    );
  },
  getDeveloperVars: function() {
    return ['lcd_oled'];
  }
};

Blockly.Python['plantbit2_oled_text'] = function(block) {
  var value_text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  //oled.text('Hello, World 1!', 0, 0, col); oled.show()
  var code = 'lcd_oled.text(str(' + value_text + '), ' + value_x + ', ' + value_y + ', 1); lcd_oled.show()\n';
  return code;
};

Blockly.Blocks['plantbit2_oled_fill'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "plantbit2_oled_fill",
        "message0": Blockly.Msg.PLANTBITV2_OLED_FILL_MESSAGE0,
        "args0": [
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#009900",
        "tooltip": Blockly.Msg.PLANTBITV2_OLED_FILL_TOOLTIP,
        "helpUrl": Blockly.Msg.PLANTBITV2_OLED_FILL_HELPURL
      }
    );
  },
  getDeveloperVars: function() {
    return ['lcd_oled'];
  }
};

Blockly.Python['plantbit2_oled_fill'] = function(block) {
  // TODO: Assemble Python into code variable.
  //oled.fill(1); oled.show()
  var code = 'lcd_oled.fill(0); lcd_oled.show()\n';
  return code;
};

Blockly.Blocks['plantbit2_dual_usb_pump'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "type": "plantbit2_dual_usb_pump",
        "message0": "bật máy bơm ở chân %1 với tốc độ (0-100) %2 %%",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "P14",
                "pin14"
              ],
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "percent",
            "check": "Number"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#009900",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['plantbit2_dual_usb_pump'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  var value_percent = Blockly.Python.valueToCode(block, 'percent', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = ''+dropdown_name+'.write_analog(round(translate('+value_percent+', 0, 100, 0, 1023)))\n';
  return code;
};

Blockly.Blocks['plantbit2_dual_usb_led'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "type": "plantbit2_dual_usb_led",
        "message0": "bật đèn LED màu ở chân %1 với mức sáng (0-100) %2 %%",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "P15",
                "pin15"
              ],
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "percent",
            "check": "Number"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#009900",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['plantbit2_dual_usb_led'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  var value_percent = Blockly.Python.valueToCode(block, 'percent', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = ''+dropdown_name+'.write_analog(round(translate('+value_percent+', 0, 100, 0, 1023)))\n';
  return code;
};