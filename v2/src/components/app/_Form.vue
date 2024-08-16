<template>
	<div class="field">
		<label class="label">Name</label>
		<div class="control">
			<input class="input" type="text" placeholder="Text input">
		</div>
	</div>

	<div class="field">
		<label class="label">Username</label>
		<div class="control has-icons-left has-icons-right">
			<input class="input is-success" type="text" placeholder="Text input" value="bulma">
			<span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
			<span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
		</div>
		<p class="help is-success">This username is available</p>
	</div>

	<div class="field">
		<label class="label">Email</label>
		<div class="control has-icons-left has-icons-right">
			<input class="input is-danger" type="email" placeholder="Email input" value="hello@">
			<span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
			<span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
		</div>
		<p class="help is-danger">This email is invalid</p>
	</div>

	<div class="field">
		<label class="label">Subject</label>
		<div class="control">
			<div class="select">
				<select>
					<option>Select dropdown</option>
					<option>With options</option>
				</select>
			</div>
		</div>
	</div>

	<div class="field">
		<label class="label">Message</label>
		<div class="control">
			<textarea class="textarea" placeholder="Textarea"></textarea>
		</div>
	</div>

	<div class="field">
		<div class="control">
			<label class="checkbox">
				<input type="checkbox">
				I agree to the <a href="#">terms and conditions</a>
			</label>
		</div>
	</div>

	<div class="field">
		<input class="is-checkradio" id="exampleCheckbox" type="checkbox" name="exampleCheckbox" checked="checked">
		<label for="exampleCheckbox">Check me</label>
	</div>
	<div class="field">
		<input class="is-checkradio" id="exampleRadioInline1" type="radio" name="exampleRadioInline" checked="checked">
		<label for="exampleRadioInline1">Option 1</label>
		<input class="is-checkradio" id="exampleRadioInline2" type="radio" name="exampleRadioInline">
		<label for="exampleRadioInline2">Option 2</label>
	</div>

	<div class="field is-grouped">
		<div class="control">
			<button class="button is-link">Submit</button>
		</div>
		<div class="control">
			<button class="button is-link is-light">Cancel</button>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>



<style scoped lang="scss">

</style>