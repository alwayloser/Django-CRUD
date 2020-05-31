<template>
	<div class="w-3/4 mx-auto">
		<table class="bg-white border-collapse w-full mt-10">
			<thead>
				<tr class="border-b border-blue-300 text-left">
					<th v-for="header in headers" :key="header.id">
						{{ header }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in items" :key="item.id">
					<td>{{ item.id }}</td>
					<td>{{ item.name }}</td>
					<td>{{ item.email }}</td>
					<td>{{ item.phone }}</td>
					<td>{{ item.created_at }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import axios from "axios";

export default {
	created() {
		this.fetchCustomer();
	},

	data() {
		return {
			items: [],
			headers: ["ID", "Name", "Email", "Phone", "Created_at"],
		};
	},

	methods: {
		fetchCustomer() {
			axios
				.get(`api/v1/customer/`)
				.then((res) => {
					this.$set(this.$data, "items", res.data);
					console.log(res);
				})
				.catch((err) => {
					console.log(err.response);
				});
		},
	},
};
</script>

<style></style>
