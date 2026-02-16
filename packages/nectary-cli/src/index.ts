#!/usr/bin/env node

import { program } from 'commander'
import { addCommand } from './add.js'

program
  .name('nectary')
  .description('Add Nectary compositions as React components to your project')
  .version('0.0.1')

program.addCommand(addCommand())

program.parse()
